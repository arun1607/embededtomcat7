package com.app.learning.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TemplateController {
	@RequestMapping("/template/{id}")
	public String getTemaplte(@PathVariable("id") String temaplteId) {
		return temaplteId;
	}
}
