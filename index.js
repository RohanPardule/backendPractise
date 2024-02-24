require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData={
  "login": "RohanPardule",
  "id": 115710861,
  "node_id": "U_kgDOBuWbjQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/115710861?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RohanPardule",
  "html_url": "https://github.com/RohanPardule",
  "followers_url": "https://api.github.com/users/RohanPardule/followers",
  "following_url": "https://api.github.com/users/RohanPardule/following{/other_user}",
  "gists_url": "https://api.github.com/users/RohanPardule/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RohanPardule/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RohanPardule/subscriptions",
  "organizations_url": "https://api.github.com/users/RohanPardule/orgs",
  "repos_url": "https://api.github.com/users/RohanPardule/repos",
  "events_url": "https://api.github.com/users/RohanPardule/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RohanPardule/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Rohan Pardule",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-10-13T12:05:38Z",
  "updated_at": "2024-01-22T19:01:10Z"
}

app.get('/github',(req,res)=>
{
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//routes banane keliye express use kiya aisa mere dost ne kaha
app.get('/login', (req, res) => {
    res.send('Chipi chipi chapa chapa')
  })
  app.get('/rohan', (req, res) => {
    res.send('Backend smjta kya tereko huten ki daadi mera express bhari')
  })




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})