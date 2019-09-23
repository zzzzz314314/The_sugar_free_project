// Develop server URL
// const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
//const postBaseUrl = 'http://weathermood-production.us-west-2.elasticbeanstalk.com/api';
//const postBaseUrl = 'http://weathermood-cloudprog-env2.mefye6uxcy.us-east-1.elasticbeanstalk.com/api';
const postBaseUrl = 'http://finalProj-server-dev.us-west-2.elasticbeanstalk.com/api';

/*export function listPosts(searchText = '', start) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (searchText)
        query.push(`searchText=${searchText}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}*/
export function listPosts(userId = '', start) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (userId)
        query.push(`userId=${userId}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }/*,
        body: JSON.stringify({
            userId
        })*/
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}
/*
export function createPost(mood, text) {
    let url = `${postBaseUrl}/posts`;

    console.log(`Making POST request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mood,
            text
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}*/
export function createPost(userId, drinkName, sugar) {
    let url = `${postBaseUrl}/posts/${userId}`;

    console.log(`Making POST request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            drinkName,
            sugar
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}
/*
export function createVote(id, mood) {
    let url = `${postBaseUrl}/posts/${id}/${mood.toLowerCase()}Votes`;

    console.log(`Making POST request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}*/

export function createGoalIncrease(userId = '', goal) {
    let url = `${postBaseUrl}/setGoal/${userId}`;
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(goal);
    console.log(`Making POST request to: ${url}`);
    

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            goal
        })
    }).then(function(res) {
        console.log('########################');
        console.log(res);
        if (res.status !== 200){
            throw new Error(`Unexpected response code: ${res.status}`);
            
        }
            

        return res.json();
    });
}


export function createUsers(age , weight , gender, sugar_should_intake, userId) {
    let url = `${postBaseUrl}/users`;
    //sugar_should_intake=666666;

    console.log(`Making POST request to: ${url}`);
    console.log(`age = ${age}`);
    console.log(`weight = ${weight}`);
    console.log(`gender = ${gender}`);
    console.log(`total = ${parseInt(age) + parseInt(weight)}`);
    console.log(`userId = ${userId}`);
    //age = -100;
    sugar_should_intake = parseInt(age) + parseInt(weight);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            age,
            weight,
            gender,
            sugar_should_intake,
            userId
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        
        console.log("res");
        console.log(res);
        return res.json();
    });
}

export function listUsers(/*searchText = '', start*/) {
    let url = `${postBaseUrl}/users`;
    let query = [];
    /*if (searchText)
        query.push(`searchText=${searchText}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');*/

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}
