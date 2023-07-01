# Photovoltaic System
## Open the PhotovoltaicSystem folder

## Install the Required Packages packages
** Microsoft.EntityFrameworkCore.Sqlite >= 7.0.5 
** Microsoft.EntityFrameworkCore.Tools >= 7.0.5

## Firstly run the Backend file
** Open the terminal and Execute this command:
** cd Backend
** cd API
** dotnet run

## Secondly run the Frontend
** Open the another terminal and Execute this command:
** cd frontend
** npm start

## One last step is to migrate the application that generates the database sqlite file. Execute this command:
** Dotnet ef migrations add InitialCreate
** Dotnet ef database update

## Find the database in bankend folder
** name: Weather.db

## Login Credintial
** username= bob@test.com 
** password= Pa$$w0rd
