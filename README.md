
This is a prototype web application for users to rate their online experience and provide feedback on one of the online services. 

The prototype implements the following features:

1. User needs to sign into the application with provided username and password.
2. User can create a Review that contains a Review Rating of either Excellent, Moderate or Needs Improvement and a Comment up to 250 characters.
3. User can view a list of all Reviews regardless of who created them that only displays the Review Rating.
4. User can select and view the individual Review which would then display the Review Rating and the Comment.
5. User can never edit a Review after it has been created.

The application is composed of the following components:

1. User interface: a simple log in window with user name and password fields; UI to submit reviews, list existing reviews, list all ratings.
2. API: retrieving review rating types, reviews, and creating reviews.
3. Database: all data user inputs is persisted in the Database.

Technologies:

1. The application is deployed on a web server, e.g., an Azure VM
2. Database is using Azure SQL Server service
3. APIs are created using ASP.NET core, using Visual Studio Code
4. API implements Swagger (Open API)
5. UI is designed in Javascript

References:

1. Tutorial: Create a web API with ASP.NET Core: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.0&tabs=visual-studio
2. ASP.NET Core web API help pages with Swagger / OpenAPI: https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-3.0
3. Tutorial: Call an ASP.NET Core web API with JavaScript: https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-javascript?view=aspnetcore-3.0
4. How TO - Password Validation: https://www.w3schools.com/howto/howto_js_password_validation.asp

How to use the code: 

1. Copy the content of the folder UI to C:\inetpub\wwwroot on a cloud web server VM. You can start with https://localhost/index.html, or replace localhost with the public domain url if applicable.The web application url should be https://[your domain url]/index.html. 
2. The database schemas are in the folder DatabaseSchema. Create two tables in SQL Server database. One is LogInInfo, and the other is ReviewRating. Load in some records to the two tables. 

3. Add your database connection string to C:\ReviewAPI\appsettings.json. The given example is from Azure SQL Server service. 

4. Copy the content of the folder ReviewAPISolution to C:\. In command prompt window, run command C:\ReviewAPISolutioni>dotnet publish -o C:\ReviewAPI -c release. This command will create a release build, and generate the publish folder named C:\ReviewAPI. 

5. Install the ASP.NET Core Module for IIS. Download dotnet-hosting-2.2.2-win.exe from https://download.visualstudio.microsoft.com/download/pr/5efd5ee8-4df6-4b99-9feb-87250f1cd09f/552f4b0b0340e447bab2f38331f833c5/dotnet-hosting-2.2.2-win.exe and then install it. The web api will be hosted on the IIS server.  

6. Setup the web api in IIS, following the referece https://docs.microsoft.com/en-us/iis/configuration/system.applicationhost/sites/site/application/. Alias: test, Physical path: C:\ReviewAPI

7. The api url should be https://[your domain url]/test/api/Review, https://[your domain url]/test/api/LogIn......

8. The Swagger url should be https://[your domain url]/test/swagger/index.html. 
