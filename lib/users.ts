// 사용자 데이터 관리 (실제로는 데이터베이스에서 관리)
export interface User {
  id: number
  email: string
  password: string
  name: string
  role: string
}

export let users: User[] = [
  {
    id: 1,
    email: 'admin@csct.com',
    password: 'admin123',
    name: '관리자',
    role: 'admin'
  },
  {
    id: 2,
    email: 'user@csct.com',
    password: 'user123',
    name: '일반사용자',
    role: 'user'
  },
  {
    id: 3,
    email: 'mentor@csct.com',
    password: 'mentor123',
    name: '멘토',
    role: 'mentor'
  }
]

export function addUser(user: Omit<User, 'id'>) {
  const newUser = {
    ...user,
    id: users.length + 1
  }
  users.push(newUser)
  return newUser
}

export function findUserByEmail(email: string) {
  return users.find(u => u.email === email)
}

export function findUserByEmailAndPassword(email: string, password: string) {
  return users.find(u => u.email === email && u.password === password)
} 