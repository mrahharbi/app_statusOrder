# Restaurant Order Management API Documentation

    ## Base URL
    `http://localhost:5000/api`

    ## Endpoints

    ### Create New Order
    **POST** `/orders`

    Request Body:
    ```json
    {
      "customer": "John Doe",
      "items": ["Burger", "Fries"]
    }
    ```

    Response:
    ```json
    {
      "id": 1,
      "customer": "John Doe",
      "items": ["Burger", "Fries"],
      "status": "Received",
      "createdAt": "2023-10-15T12:00:00.000Z"
    }
    ```

    ### Get All Orders
    **GET** `/orders`

    Response:
    ```json
    [
      {
        "id": 1,
        "customer": "John Doe",
        "items": ["Burger", "Fries"],
        "status": "Received",
        "createdAt": "2023-10-15T12:00:00.000Z"
      }
    ]
    ```

    ### Get Single Order
    **GET** `/orders/:id`

    Response:
    ```json
    {
      "id": 1,
      "customer": "John Doe",
      "items": ["Burger", "Fries"],
      "status": "Received",
      "createdAt": "2023-10-15T12:00:00.000Z"
    }
    ```

    ### Update Order Status
    **PUT** `/orders/:id`

    Request Body:
    ```json
    {
      "status": "Preparing"
    }
    ```

    Response:
    ```json
    {
      "id": 1,
      "customer": "John Doe",
      "items": ["Burger", "Fries"],
      "status": "Preparing",
      "createdAt": "2023-10-15T12:00:00.000Z"
    }
    ```

    ### Delete Order
    **DELETE** `/orders/:id`

    Response: 204 No Content

    ## Status Codes
    - 200: OK
    - 201: Created
    - 204: No Content
    - 400: Bad Request
    - 404: Not Found
    - 500: Internal Server Error
