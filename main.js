
const postItem = React.createElement(
    'div',
    {
        className: 'post-item',
    },
    React.createElement(
        'h2', 
        {title:'Học React tại F8'},
        'Học React JS'), 
    React.createElement(
        'p', 
        null, 
        'Học ReactJS từ cơ bản tới nâng cao')
)

//Get root Element
const root = document.getElementById('root');

const h1Element1 = React.createElement('h1', {
    title: 'hello',
    className:'heading'
}, 'Hello guys')

// const h1Element2 = React.createElement(
//     'ul', 
//     null,
//     React.createElement('li',null, 'Javascript'),
//     React.createElement('li',null, 'Học React cơ bản tới nâng cao'
//     )
// )

// React-DOM render UI
// ReactDOM.render(postItem, root)
// ReactDOM.render(h1Element1, root)

const ul = <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
            </ul>
ReactDOM.render(ul, root)




