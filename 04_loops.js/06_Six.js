 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNums.filter((num) => {
//             return num > 4
//  })

const newNums = []

myNums.forEach((num) => {
            if(num > 4){
                        newNums.push(num)
            }
})


//  console.log(newNums);


const books = [
            {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
            {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
            {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
            {title: 'Book Four', genre: 'Science', publish: 2002, edition: 2014},
            {title: 'Book Five', genre: 'Fiction', publish: 1982, edition: 2000},
            {title: 'Book Six', genre: 'History', publish: 2003, edition: 2018},

]

// const userBook = books.filter((bk) => bk.genre === 'History')

// const userBook = books.filter((bk) => {
//             return bk.publish >=2000
// })

const userBook = books.filter((bk) => {
            return bk.publish >= 2000 && bk.genre === 'History'
})


console.log(userBook);

