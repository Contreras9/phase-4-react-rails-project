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

lessonA = Lesson.create(test_case_file: 'test-file', title: 'test-title', short_description: 'test-description', task: 'test-task')
lessonB = Lesson.create(test_case_file: 'test-file', title: 'test-title', short_description: 'test-description', task: 'test-task')

# Submission.create(coder_id: coderJohn.id, lesson_id: lessonA.id, code_solution: 'test')
# Submission.create(coder_id: coderJill.id, lesson_id: lessonB.id, code_solution: 'test')