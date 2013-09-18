package com.app.learning.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class HelloServlet extends HttpServlet {
	@Override
	protected void doGet(final HttpServletRequest req, final HttpServletResponse resp)
			throws ServletException, IOException {
		ServletOutputStream out = resp.getOutputStream();
		out.write("hello heroku".getBytes());
		out.flush();
		out.close();
	}
}
