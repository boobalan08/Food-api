
document.getElementById("button").addEventListener("click",foo)

async function foo(){

var data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

var data1 = await data.json()

console.log(data1);
 document.getElementById("image").setAttribute("src",data1.meals[0].strMealThumb)
 document.getElementById("mealname").innerHTML=`${data1.meals[0].strMeal}`

}