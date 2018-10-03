import gql from 'graphql-tag'

export const specialtiesByTypeQuery =  gql`
  query specialtiesByTypeQuery($education_type: EducationType!, $education_form: EducationForm!) {
    faculties(
      where: {
        specialties_every: {
          specialtyFormat_every:{
            educationType: $education_type,
            educationForm: $education_form
          }
        }
      }
    ) {
      title
      specialties {
        title
        specialtyFormat {
          price
          educationForm
          educationType
          term
        }
        qualification
      }
    }
  }
`

