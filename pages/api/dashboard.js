const dashboard = [
    {
        "posts":5,
        "likes": 100,
        "followers": 20,
        "following": 50
    }
    
]

export default function handler(req, res) {
  res.status(200).json(dashboard)
}