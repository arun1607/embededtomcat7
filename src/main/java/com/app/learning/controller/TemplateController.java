package com.app.learning.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/template")
public class TemplateController {
	private static Logger log = Logger.getLogger(TemplateController.class);

	@RequestMapping("/**/*")
	public String getTemaplte(HttpServletRequest request) {
		String pathInfo = request.getRequestURI();
		if (null != pathInfo) {
			String[] splits = pathInfo.split("/template/");
			String vwName = splits[1];
			if (splits[1].contains(".html")) {
				vwName = splits[1].replace(".html", "");
			}
			return vwName;
		}
		log.info("Jqt not found");
		return null;
	}
}
