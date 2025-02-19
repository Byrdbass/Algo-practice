SELECT customer_number  
FROM Orders
WHERE (customer_number, order_number) IN (
   SELECT COUNT(order_number), customer_number From Orders HAVING MAX(count(order_number))
);