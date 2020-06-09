import { MongoClient } from 'mongodb'

// const uri = process.env.DB_URI

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const dbName = 'portfolios'

export default async (req, res) => {
  try {
    // const afterConnection = await client.connect()

    // const db = await client.db(process.env.DB_NAME)

    // const collection = await db.collection(dbName)

    // const portfolios = await collection.find({}).toArray()
    const portfolios = portfolioData
    res.status(200).json(portfolios)
  } catch (err) {
    console.log(err)
  }
}

const portfolioData = [
  {
    _id: '5e9de6c21c9d4400006194a0',
    title: 'Work Order Management Api',
    company: 'Net Giver',
    location: 'San Francisco, CA',
    position: 'Developer',
    description: 'Work order management app',
    projectUrl: 'https://netgiver-stage.herokuapp.com/graphql',
    githubUrl:
      'https://github.com/Lambda-School-Labs/net-giver-work-order-management-be',
    ImageName: 'womApi',
    startDate: '2020-01-08T17:26:33.664Z',
    endDate: '2020-02-08T17:26:33.664Z',
    userId: 'google-oauth2|107898228644517862021',
    __v: 0,
    imageName: 'apollo-server.svg',
  },
  {
    _id: '5ea8b0a8f2b85d283e9ece60',
    title: 'Work Order Management App',
    company: 'Net Giver',
    location: 'San Francisco, CA',
    position: 'App Developer',
    description: 'Work order management app',
    projectUrl: 'https://expo.io/@skylerwebdev/ngwom',
    githubUrl:
      'https://github.com/Lambda-School-Labs/net-giver-work-order-management-fe',
    imageName: 'netgiverapp.png',
    startDate: '2020-01-08T17:26:33.664Z',
    endDate: '2020-02-08T17:26:33.664Z',
    userId: 'google-oauth2|107898228644517862021',
    __v: 0,
  },
]
