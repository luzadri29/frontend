import React, { useEffect, useState } from 'react';
import {Jumbotron, Container, Card, CardBody, CardTitle, CardText, CardColumns} from 'reactstrap';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    //fetch data from API
    const FetchCompanies = async () => {
        const DEAULT_VALUE = [];
        try {
           fetch('https://fakerapi.it/api/v1/companies').then(response => response.json())
           .then(({data}) => {
            setCompanies( data || DEAULT_VALUE);
        });      
        } catch (error) {
            //error handling section
            setCompanies(DEAULT_VALUE);
        }
    }
    //useEffect for calling the API
    useEffect(() => {
        FetchCompanies();
    }, []);
    

    return(
        <div>
            <Jumbotron>
                <Container fluid>
                    <h1 className="comp">Companies</h1>
                </Container>
            </Jumbotron>
          <CardColumns>
            { 
                companies && companies.length && companies.map((company, index) => 

                <Card key={index}>
                    <CardBody>
                        <CardTitle tag="h5">{company.name}</CardTitle>
                        <CardText>{company.email}</CardText>
                        <CardText>Vat: {company.vat}</CardText>
                        <CardText>Phone: {company.phone}</CardText>
                        <CardText>Country: {company.country}</CardText>
                    </CardBody>
                </Card> 
                
                )
            }
        </CardColumns>

        </div>
    );

}

export default Companies;