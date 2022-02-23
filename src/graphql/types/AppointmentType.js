const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const ClinicType = require('./ClinicType')
const PatientType = require('./PatientType')
const TypesType = require('./TypesType')

const AppointmentType = new GraphQLObjectType({
  name:'Appointment',
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLID },
    status: { type: GraphQLString },
    Patient: { 
      type: PatientType,
      resolve: (parent) => parent.Patient 
    },
    Type: { 
      type: TypesType,
      resolve: (parent) => parent.Type 
    },
    Clinic: { 
      type: ClinicType,
      resolve: (parent) => parent.Clinic 
    },
  })
})

module.exports = AppointmentType
