package com.ecommerce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Entity.OrderAR;
import com.ecommerce.Entity.Product;
import com.ecommerce.Repository.OrderRepo;

@Service
public class OrderService {

	@Autowired
	OrderRepo or;
	
	public OrderAR addSingleOrder(OrderAR o){
	try{
		return or.save(o);
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
	public List<OrderAR> addListofOrders(List <OrderAR> o){
	try{
		List<OrderAR> list= or.saveAll(o);
		return list;
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
	
	public List<OrderAR> getAllOrders(){
	try{
		return or.findAll();
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
}
