/**
 * Created by maddie on 12/6/16.
 */
/*
 ● Create a generic class with property name, then
 ○ setName() with generic type
 ○ getName() with generic type
 Now create instances for that class with different types. And
 display message using console.
 ● Create generic constraint:
 interface IUser { }
 class User<T extends IUser> { }
 As we already discussed, It means that T has to implement IUser. In simple
 terms it will restrict the type of T to anything that implements IUser.
 The importance of this is that you cannot really pass any data-type,
  but you just have to pass something specific (in this case it’s going to be IUser).
 Define some property in interface and use them in class. Display output using console.
 */
var GenericsClass = (function () {
    function GenericsClass() {
    }
    GenericsClass.prototype.setName = function (name) {
        this.name = name;
    };
    GenericsClass.prototype.getName = function () {
        return this.name;
    };
    return GenericsClass;
}());
var gen1 = new GenericsClass();
gen1.setName("Hello World");
console.log(gen1.getName());
var gen2 = new GenericsClass();
gen2.setName(1);
console.log(gen2.getName());
var gen3 = new GenericsClass();
gen3.setName(true);
console.log(gen3.getName());
console.log("//*********************************//");
var User = (function () {
    function User(arg) {
        this.role = arg;
    }
    User.prototype.printUser = function () {
        console.log("User has the role of " + this.role.userType);
    };
    return User;
}());
var adminUser = new User({ userType: "Admin" });
adminUser.printUser();
