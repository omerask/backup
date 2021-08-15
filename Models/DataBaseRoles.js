const mongoose = require("mongoose");

const RolesDB = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  GuildID: String,
  RoleID: String,
  RoleName: String,
  RoleColor: String,
  RoleMembers: Array,
  RolePermissions: Number,
  RolePosition: Number,
  RoleHoisted: Boolean,
  RoleTime: Number,
  RoleSize: Number,
  RolechannelOverwrites: Array 
});

module.exports = mongoose.model("RolesDB", RolesDB);
