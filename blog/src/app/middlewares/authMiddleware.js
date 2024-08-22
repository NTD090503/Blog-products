

module.exports = (req, res, next) => {
    console.log("ath mid" +req.session.user);
    if(req.session.userlogged)
		next();
	else
		res.status(403).send("Forbidden");
};
