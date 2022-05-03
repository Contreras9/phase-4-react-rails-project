# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

coderJohn = Coder.create(name: 'John', age: 27, country: 'USA', password: '1234')
coderJane = Coder.create(name: 'Jane', age: 23, country: 'Canada', password: '1234')
coderJill = Coder.create(name: 'Jill', age: 25, country: 'USA', password: '1234')

lessonA = Lesson.create(test_case_file: "function myFunction ( a, b ) {\n   return \n}\n\nmyFunction()", image: "2.jpg", title: "Javascript Basics", short_description: "This series of challenges covers the very basics of Javascript.", task: "Write a function that takes two numbers (a and b) as argument. Sum a and b and return the result...")

lessonA = Lesson.create(test_case_file: "function myFunction ( a, b ) {\n   return \n}", image: "11.webp", title: "Comparison operators", short_description: "This series of challenges covers the very basics of Javascript.", task: "Write a function that takes two values, say a and b, as arguments, Return true if the two values are equal and of the same type")

lessonA = Lesson.create(test_case_file: "function myFunction ( a, b ) {\n   return \n}", image: "12.jpeg", title: "Get type of value", short_description: "This series of challenges covers the very basics of Javascript.", task: "Write a function that takes a value as argument, Return the type of the value")

lessonA = Lesson.create(test_case_file: "function myFunction ( a, b ) {\n   return \n}", image: "13.jpeg", title: "Remove first n characters of string", short_description: "This series of challenges covers the very basics of Javascript.", task: "Write a function that takes a string (a) as argument, Remove the first 3 characters of a, Return the result")

lessonA = Lesson.create(test_case_file: "function myFunction ( a, b ) {\n   return \n}", image: "3.jpg", title: "Check if a number is even", short_description: "This series of challenges covers the very basics of Javascript.", task: "Write a function that takes a number as argument, If the number is even, return true, Otherwise, return false")

# Submission.create(coder_id: coderJohn.id, lesson_id: lessonA.id, code_solution: 'test')
# Submission.create(coder_id: coderJill.id, lesson_id: lessonB.id, code_solution: 'test')