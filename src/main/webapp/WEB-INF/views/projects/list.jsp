<%@page isELIgnored="true"%>
 <% _.each(projects, function(user) { %>
<p><%=user.get('name')%></p>
<% }); %>
