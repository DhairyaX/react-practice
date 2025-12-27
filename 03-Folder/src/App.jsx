import React from 'react'
import Card from './Components/card'


const characters = [
  {
    backgroundImage: "https://imgs.search.brave.com/emJXVaIrx2WpA31aXDcpNHayYcJpvbUPQUiPeX5b0MY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L2pvaG4t/d2ljay01LmpwZz9x/PTQ5JmZpdD1jcm9w/Jnc9MjIwJmg9MTgy/JmRwcj0y",
    profilePhoto: "https://imgs.search.brave.com/6LDhRZMN2_cwg8rO0Mja9BcQLuLh0OtebJTZWrKxFXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxNTk4/OTIuanBn",
    name: "John Wick",
    nickname: "Baba Yaga",
    description: "A legendary hitman driven by loyalty, loss, and ruthless precision."
  },
  {
    backgroundImage: "https://imgs.search.brave.com/g1DdX4cVg48sJcV8s8A4Gt_BkjsbpxiHSlLrC7vrSCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYnJl/YWtpbmctYmFkLXdh/bHRlci1jb2xvci1z/a2V0Y2gtMG1heXFi/Zno4NjdhemwwZS5q/cGc",
    profilePhoto: "https://imgs.search.brave.com/Tg3_fl6TwIr0gafQnzuYYoNd_PPWjP9sj7UTJ8VEGvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82Lzcv/MC8yMDE1NzkzLTIw/MDB4MTMzMy1kZXNr/dG9wLWhkLXdhbHRl/ci13aGl0ZS13YWxs/cGFwZXIuanBn",
    name: "Walter White",
    nickname: "Heisenberg",
    description: "A chemistry teacher who transforms into a ruthless drug kingpin."
  },
  {
    backgroundImage: "https://imgs.search.brave.com/9iSosKc9ADBf1NJRDKJh1NmD4oNK1VbC4SXsAm18dEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdG9t/bXktc2hlbGJ5LTRr/LWNodXJjaC1rM2lh/YXhvMHc5OTM5emFu/LmpwZw",
    profilePhoto: "https://imgs.search.brave.com/3V8I-NvwRWpaOSk0nlfOmT7NmSo3sLDKOiOro6NVmvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdG9t/bXktc2hlbGJ5LTRr/LXBhdHJvbC1naWJp/ZGthNjR2M3g0cWRy/LmpwZw",
    name: "Thomas Shelby",
    nickname: "Tommy",
    description: "A brilliant gang leader with ambition sharper than his razor blade."
  }
];


const App = () => {
  return (
    <div className='parent'>
      {characters.map((elem, idx) => {
        return <div key={idx}>
          <Card backgroundImage={elem.backgroundImage} profilePhoto={elem.profilePhoto} name={elem.name} nickname={elem.nickname} description={elem.description} />
        </div>
      })}
    </div>
  )
}

export default App
