class ExpertLogger {
  async info(msg){
    const now = new Date()
    console.log('', now, msg)
  }
}

module.exports = ExpertLogger