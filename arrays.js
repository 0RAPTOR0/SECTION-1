const myArr = [ 765, 'Hello', true, console.log,[ 1, 2, 3]];

console.log(myArr);

const movies = ['Tere Naam', 'Animal', 'Pk', 'RRR', 'Deja Vu', 'Shaitaan']
console.log(movies.length);

// indexing
console.log( movies[4]);
console.log( movies.at(3));

movies[4] = 'The Shawshank Redemption'
console.log(movies);
// to replace certain items

console.log(movies.at(-3));
// counting from back minus

// slicing
console.log(movies.slice(1,4));  //also works for strings 
console.log(movies.slice(1, 40));
console.log(movies.slice(1));

const price = '₹536.65/-';
console.log(price.slice());

// adding new elements
movies.push('The Dark Knight')       //adding last
movies.unshift('The Godfather')      //adding 1st
console.log(movies);

// removing elements
movies.pop();                        //removes last element
movies.shift();                      //removes 1st element
console.log(movies);

// movies.splice (3, 2); it will remove 2 elements starting from index 3
// movies.splice (3, 2, 'Batman', 'Superman', 'Thor'); // it will remove 2 elements starting from index 3 and add 3 new elements
movies.splice(3, 2, 'Batman', 'Superman','Thor');  
console.log(movies);



