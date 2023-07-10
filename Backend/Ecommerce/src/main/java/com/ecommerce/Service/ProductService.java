package com.ecommerce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Entity.Product;
import com.ecommerce.Repository.ProductRepo;

@Service
public class ProductService {

	@Autowired
	ProductRepo pr;
	
	public Product addSingleProduct(Product p){
	try{
		return pr.save(p);
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
		
	
	public List<Product> addListofProducts(List <Product> p){
	try{
		List<Product> list= pr.saveAll(p);
		return list;
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
	
	public List<Product> getAllProducts(){
	try{
		return pr.findAll();
	}catch (Exception e) {
		e.printStackTrace();
		return null;
	}
}
}
