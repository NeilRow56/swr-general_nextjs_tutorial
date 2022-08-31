// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = ["Pedro", "Jack", "Caterina", "Michael Scott" , "Julian", "Bob"]

export default function handler(req, res) {
  res.status(200).json(users)
}
