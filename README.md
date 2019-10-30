"# ReviewRatingApp" 
Copy the content of the folder UI to C:\inetpub\wwwroot on a cloud web server VM. You can start with https://localhost/index.html, or replace localhost with the public domain url if applicable.The web application url should be https://[your domain url]/index.html. 

The database schemas are in the folder DatabaseSchema. Create two tables in SQL Server database. One is LogInInfo, and the other is ReviewRating. Load in some records to the two tables. 

Add your database connection string to C:\ReviewAPI\appsettings.json. The given example is from Azure SQL Server service. 

Copy the content of the folder ReviewAPISolution to C:\. In command prompt window, run command C:\ReviewAPISolutioni>dotnet publish -o C:\ReviewAPI -c release. This command will create a release build, and generate the publish folder named C:\ReviewAPI. 

Install the ASP.NET Core Module for IIS. Download dotnet-hosting-2.2.2-win.exe from https://download.visualstudio.microsoft.com/download/pr/5efd5ee8-4df6-4b99-9feb-87250f1cd09f/552f4b0b0340e447bab2f38331f833c5/dotnet-hosting-2.2.2-win.exe and then install it. The web api will be hosted on the IIS server.  

Setup the web application in IIS, following the referece https://docs.microsoft.com/en-us/iis/configuration/system.applicationhost/sites/site/application/. Alias: test, Physical path: C:\ReviewAPI

The api url should be https://[your domain url]/test/api/Review, https://[your domain url]/test/api/LogIn......

The Swagger url should be https://[your domain url]/test/swagger/index.html. 
