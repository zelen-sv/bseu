import gql from 'graphql-tag'

export const specialtiesByDataQuery =  gql`
  query specialtiesByDataQuery($education_type: EducationType!, $education_form: EducationForm!) {
    specialties (where: {
      educationType: $education_type,
      educationForm: $education_form
    }) {
      title
      description
      educationForm
      educationType
      qualification
      price
      term
      faculty {
        title
      }
    }
  }
`

