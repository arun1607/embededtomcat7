package com.app.learning.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ValidityController {

	@RequestMapping("/check/{ensureUnique}")
	@ResponseBody
	public Map<String, String> validate(@PathVariable("ensureUnique") String ensureUnique) {
		return Collections.singletonMap("isUnique", "true");
	}
}
