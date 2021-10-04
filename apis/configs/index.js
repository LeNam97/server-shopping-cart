module.exports ={
  // Lấy mã bí mật từ trong env (env là một file bí mật không cho người khác có thể tự do xem thông tin ở trong)
  JWT_SECRET: process.env.JWT_SECRET,
  auth:{
    google:{
      CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook:{
      CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
      CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET
    },
  }
}
