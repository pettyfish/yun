const Mock = require('mockjs')
const Random = Mock.Random
Mock.mock(/\/course\/course_all/, 'post', {
    courses: [{
        imgurl: Random.image(),
        title: Random.title(),
        status: Random.natural(0, 4)
    }]
})