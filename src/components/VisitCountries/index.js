import {Component} from 'react'
import {
  VisitCountriesContainer,
  Heading,
  Countries,
  Country,
  Para,
  CustomButton,
  Image,
  Name,
  DeleteButton,
  CountryContent,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {countriesList: initialCountriesList}

  ontoggleVisit = id => {
    this.setState(prevState => {
      const modifiedList = prevState.countriesList.map(eachCountry => {
        if (eachCountry.id === id) {
          return {...eachCountry, isVisited: !eachCountry.isVisited}
        }
        return eachCountry
      })
      return {countriesList: modifiedList}
    })
  }

  render() {
    const {countriesList} = this.state
    const countriesVisitedList = countriesList.filter(
      eachCountry => (eachCountry.isVisited: true),
    )
    return (
      <VisitCountriesContainer>
        <Heading>Countries</Heading>
        <Countries>
          {countriesList.map(eachCountry => {
            const {id, name, isVisited} = eachCountry
            const onClickButton = () => {
              this.ontoggleVisit(id)
            }
            return (
              <Country key={id}>
                <Para>{name}</Para>
                <CustomButton
                  as={isVisited ? 'p' : 'button'}
                  visit={isVisited ? 'visited' : 'visit'}
                  onClick={onClickButton}
                >
                  {isVisited ? 'visited' : 'Visit'}
                </CustomButton>
              </Country>
            )
          })}
        </Countries>
        <Heading>Visited Countries</Heading>

        {countriesVisitedList.length < 1 ? (
          <Para>No Countries Visited Yet</Para>
        ) : (
          <Countries flag>
            {countriesVisitedList.map(eachCountry => {
              const {id, name, imageUrl} = eachCountry
              const onClickButton = () => {
                this.ontoggleVisit(id)
              }
              return (
                <Country key={id} flag>
                  <Image src={imageUrl} alt="thumbnail" />
                  <CountryContent>
                    <Name>{name}</Name>
                    <DeleteButton onClick={onClickButton}>Remove</DeleteButton>
                  </CountryContent>
                </Country>
              )
            })}
          </Countries>
        )}
      </VisitCountriesContainer>
    )
  }
}

export default VisitCountries
