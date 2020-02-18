<%@ page isErrorPage="true" %>
<html lang="it" dir="ltr">
	<body>
		<%
			String errorMessage = (String)request.getAttribute("errorMessage");
		 %>
	
		<div id="content">
			<h1>Errore</h1>
			
			<p>Si è verificato un errore durante l'elaborazione di 
				<b><%= request.getAttribute("javax.servlet.error.request_uri") %></b>
			</p>
			<p>
			 	<c:if test="${errorMessage != null}">
			    	<b><c:out value='${errorMessage}'/></b><br>
			  	</c:if>
			</p>
			
			 	<%
				   	boolean showDetails = new Boolean((String)application.getInitParameter("showDetailInErrorPage")).booleanValue();   
				   	if (showDetails && request.getAttribute("javax.servlet.error.exception") != null) {
				%>
			
				<p>Si è verificato un errore di tipo
				    <b><%= exception.getClass().getName() %></b> durante l'elaborazione di 
				    <b><%= request.getAttribute("javax.servlet.error.request_uri") %></b>
				</p>
				
				<h2>Dettagli</h2>
				
				<p><b><%= exception.getClass().getName() + ": " + exception.getMessage()%></b></p>
				<p>
				<%
				
					Throwable e = (Throwable)request.getAttribute("javax.servlet.error.exception");
					StackTraceElement[] stack = e.getStackTrace();
					
					for (int n = 0; n < Math.min(5, stack.length); n++) { 
					    out.write(stack[n].toString());
					    out.write("<br/>");
					}
					
					out.write("<hr />"); 
					
					e = (e instanceof ServletException) ? ((ServletException)e).getRootCause() : e.getCause();
					
					if (e != null) { 
					    out.write("Causa: <b>" + e.getClass().getName() + "</b><p> [ " + e.getMessage() + " ] </p>");
					    stack = e.getStackTrace();
					    for (int n = 0; n < Math.min(5, stack.length); n++) { 
					        out.write(stack[n].toString());
					        out.write("<br/>");
					    }
					} 
				%>	
			  
				<%   
		   		}
		   	   	String returnURL = (String)application.getInitParameter("people.sirac.error.returnURL");   
			   	if(returnURL != null)   {
			 	%>
			 
				</p>
		
			</div> 
		
		 	<br/><br/>
			<div align="center">
				<input type="button" style="width:100px" name="return" value="OK" onclick="location='<%=returnURL%>'"/>
		    </div>
		 <%
		   }
		 %>
	
	   
	</body>
</html>