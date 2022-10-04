const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Udin', role: ROLE.ADMIN },
    { id: 2, name: 'Ujang', role: ROLE.BASIC },
    { id: 3, name: 'Ucup', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Udin's Project", userId: 1 },
    { id: 2, name: "Ujang's Project", userId: 2 },
    { id: 3, name: "Ucup's Project", userId: 3 }
  ]
}