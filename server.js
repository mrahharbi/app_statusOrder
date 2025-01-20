import express from 'express';
    import cors from 'cors';

    const app = express();
    app.use(cors());
    app.use(express.json());

    let orders = [];
    let orderIdCounter = 1;

    // Create new order
    app.post('/api/orders', (req, res) => {
      const newOrder = {
        id: orderIdCounter++,
        customer: req.body.customer,
        items: req.body.items,
        status: 'Received',
        createdAt: new Date()
      };
      orders.push(newOrder);
      res.status(201).json(newOrder);
    });

    // Get all orders
    app.get('/api/orders', (req, res) => {
      res.json(orders);
    });

    // Get single order
    app.get('/api/orders/:id', (req, res) => {
      const order = orders.find(o => o.id === parseInt(req.params.id));
      if (!order) return res.status(404).json({ message: 'Order not found' });
      res.json(order);
    });

    // Update order status
    app.put('/api/orders/:id', (req, res) => {
      const order = orders.find(o => o.id === parseInt(req.params.id));
      if (!order) return res.status(404).json({ message: 'Order not found' });

      const validStatuses = ['Received', 'Preparing', 'Ready', 'Completed'];
      if (!validStatuses.includes(req.body.status)) {
        return res.status(400).json({ message: 'Invalid status' });
      }

      order.status = req.body.status;
      res.json(order);
    });

    // Delete order
    app.delete('/api/orders/:id', (req, res) => {
      const index = orders.findIndex(o => o.id === parseInt(req.params.id));
      if (index === -1) return res.status(404).json({ message: 'Order not found' });

      orders.splice(index, 1);
      res.status(204).end();
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
