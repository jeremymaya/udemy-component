import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail
                avatar={faker.image.avatar()}
                author={faker.internet.userName()}
                timeAgo="Today at 6:00PM"
                content={faker.random.words()}
            />
            <CommentDetail
                avatar={faker.image.avatar()}
                author={faker.internet.userName()}
                timeAgo="Today at 2:00PM"
                content={faker.random.words()}
            />
            <CommentDetail
                avatar={faker.image.avatar()}
                author={faker.internet.userName()}
                timeAgo="yesterday at 6:00PM"
                content={faker.random.words()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));