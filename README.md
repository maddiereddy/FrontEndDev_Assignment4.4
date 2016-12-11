# FrontEndDev_Assignment4.4
### Assignment 4.4 of the AcadGild Front End Web Dev Course

* Create a generic class with property name, then  
    - setName() with generic type  
    - getName() with generic type  

Now create instances for that class with different-different types. And
display message using console.

* Create generic constraint:  
interface IUser { }  
class User<T extends IUser> { }  

As we already discussed, it means that T has to implement IUser. In simple
terms it will restrict the type of T to anything that implements IUser. The importance of this is that you cannot really pass any data-type, but you just have to pass something specific (in this case it’s going to be IUser).
Define some property in interface and use them in class. Display output using console.