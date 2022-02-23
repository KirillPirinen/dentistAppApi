const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLSchema } = require('graphql')
const { Doctor, Patient, Appointment } = require("../../../db/models")
const { graphiqlToSequelizeSimple, graphiqlToSequelizeNested } = require('../utils/parse-graphql-meta')
const { DoctorType, PatientType, AppointmentType } = require('../types')

const Query = new GraphQLObjectType({
  name:'Query',
  fields: {
    doctor: { 
      type: DoctorType, 
      args: { id: { type: GraphQLID } },
      resolve: (parent, args, context, info) => Doctor.findByPk(args.id, { 
        attributes: graphiqlToSequelizeSimple(info.fieldNodes[0]) })
    },
    patient: { 
      type: PatientType, args: { id: { type: GraphQLID } },
      resolve: (parent, args, context, info) => Patient.findByPk(args.id, { 
        attributes: graphiqlToSequelizeSimple(info.fieldNodes[0]) })
    },
    patients: {
      type: new GraphQLList(PatientType),
      resolve: (parent, args, context, info) => Patient.findAll({ 
        where: { doctor_id: 1 }, 
        attributes: graphiqlToSequelizeSimple(info.fieldNodes[0]) })
    },
    appointments: {
      type: new GraphQLList(AppointmentType),
      resolve: (parent, args, context, info) => Appointment.findAll({ 
        where: { doctor_id: 1 }, 
        ...graphiqlToSequelizeNested(info.fieldNodes[0]) })
    }
  }
})

module.exports = new GraphQLSchema({
  query:Query
})
