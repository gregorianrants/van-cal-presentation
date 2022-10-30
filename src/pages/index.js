import * as React from "react"
import Login from '../assets/login.mp4'
import CreatingBooking from '../assets/creating-booking.mp4'
import GenerateFakeData from '../assets/generate-fake-data.mp4'
import Tiles from '../assets/tiles.jpg'
import NativeFeel from '../assets/native-feel.mp4'
import DragAndDrop from '../assets/drag_and_drop.mp4'
import styled from "styled-components";
import "@fontsource/roboto"

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`


const Container = styled.div`
  width: 800px;
  font-family: "Roboto";
  margin: 0 auto;
`

const Body = styled.div`
  color: #36313d;
  line-height: 1.4em;
  margin-bottom: 1.5rem;
`

const Header = styled.div`
  background-color: darkslateblue;
  color: white;
  padding: 0.8em 0;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1em;
  vertical-align: center;
`

const List = styled.ul`
  line-height: 1.3rem;
`

const NestedList = styled.ul`
  line-height: 1.3rem;
`

const ListItem = styled.li`
  margin-bottom: 1em;
`

// markup
const IndexPage = () => {
    return (
        <>
            <GlobalStyle/>
            <div>
                <Header>
                    <Container>
                        <Title>VanCal</Title>
                    </Container>
                </Header>
                <Container>
                    <h1>Introduction</h1>

                    <Body>Van Cal is a Web application I built to demonstrate my web development skills. It solves a
                        real world problem I encountered in running my own removals business. The solution provides an
                        integrated booking and invoicing application for removals companies. I have generalised the
                        application to be a Software As A Service - SAAS - application. Any removal company can create
                        their own account in the application or sign in with their google account and create and manage
                        their own data.
                    </Body>

                    <h1>The Pre-Existing Solution</h1>

                    <Body>Prior to VanCal I Used Google Calendar to manage my bookings , it has some great features
                        but also some drawbacks.</Body>

                    <h2>Google Calendar : Pros</h2>

                    <List>
                        <ListItem>It allows colleagues to share their calendars</ListItem>
                        <ListItem>I can view colleagues availability in the same place that I make my
                            bookings.</ListItem>
                        <ListItem>I can invite colleagues to events and see clearly when they have accepted the
                            invite.</ListItem>
                        <ListItem>the week view has a very nice layout which communicates a lot of info at a glance and
                            helps with scheduling new bookings
                        </ListItem>
                    </List>

                    <h2>Google Calendar : Cons</h2>

                    <List>
                        <ListItem>More or less all the information for the booking goes in one field. i need more
                            atomicity with certain pieces of data e.g. storing the bill amount.
                        </ListItem>
                        <ListItem>The lack of atomic fields means i also need to maintain a seperate spread sheet of
                            bookings to keep records and manage invoicing
                        </ListItem>
                        <ListItem>this leads to a lot of duplicated data and the following associated problems
                            <NestedList>
                                <ListItem>wastes time</ListItem>
                                <ListItem>increased chance of errors</ListItem>
                                <ListItem>fall behind with record keeping</ListItem>
                            </NestedList>
                        </ListItem>
                        <ListItem>google calendar is not an extensible solution, a custom application could solve the
                            problems
                            associated with
                            Google calendar as well as make new functionality in other
                            domains possible and further increase productivity
                        </ListItem>
                    </List>


                    <h2>The Solution</h2>

                    <h2>Summary</h2>
                    <Body>
                        VanCal is a full stack application with react on the front end and an express.js api
                        on the backend. The express.js application uses mongoDb for the data storage solution.
                        I will be adding an extensive article in the near future about the technologies, Van
                        Cal uses.
                    </Body>

                    <Body>
                        Van Cal has all the positives of Google calendar but none of the draw backs.
                        it has a calendar view similar to the week view of google calendar.
                        When making booking the data is recorded at the right level of atomicity and the
                        information captured during the booking process can be used for record keeping for the
                        business.
                    </Body>

                    <Body>
                        Van Cal integrates with Google calendar. A user can authorise VanCal to view event
                        data from Google calendar this can then be viewed on the calendar view on VanCal to
                        still provide all the benefits of google calendar.
                    </Body>

                    <Body>
                        There is a list view with a table of all the bookings. this can be used for managing
                        invoicing. the list can be filtered to see what bookings have not been invoiced yet.
                        the user can then go into a page for managing the individual bookings and generate an
                        invoice which will be stored in the backend of the application they can also email the
                        invoice from VanCal.
                    </Body>


                    <h1>A walk through VanCal</h1>

                    <h2>Home Page</h2>
                    <Body>
                        On first visiting VanCal, prior to logging in a user is presented with the home page, the
                        provides a brief description of what the application does and how it uses data. This page is
                        required by google for any application that uses google data such as VanCal which provides an
                        option to use data from Google Calendar.
                    </Body>

                    <h2>login</h2>

                    <Body>Users can create an email and password account and then sign in with it or they can sign in with their google account.  They can then create and manage data associated with the account they are signed in with.
                    </Body>

                    <Body>On logging in the user is redirected to the calendar page there isnt much to see hear yet as we havent created any data thus far.  Dont worry though we will get the the exciting stuff soon.</Body>

                    <video controls width="800px">
                        <source src={Login} type="video/mp4"/>
                    </video>

                    <h2>Creating A Booking</h2>
                    <Body>To create a booking click on the time slot on the calendar you want the booking to start at
                        and a form is launched to input the rest of the details.  Notice the immediate validation feedback given on the form.</Body>

                    <video controls width="800px">
                        <source src={CreatingBooking} type="video/mp4"/>
                    </video>

                    <Body>The event is added to the calendar immediately on saving this is known as an optimistic update and contributes to giving VanCal a native feel.</Body>

                    <h2>Adding Fake Data</h2>
                    <Body>You can add fake data to VanCal to see what the ui will look like in every day use with multiple booking in the calendar </Body>
                    <video controls width="800px">
                        <source src={GenerateFakeData} type="video/mp4"/>
                    </video>
                    <h2>Custom Tiling Algorithim</h2>
                    <Body>The layout of the tiles in van cal is not possible with any native css layout module.  VanCal uses a custom algorithim to calculate the layout of the tiles and then positions them using absolute positioning.  No 3rd party library was used for laying out the tiles.</Body>
                    <img src={Tiles} alt="" width='800px'/>
                    <h2>Native App Experience</h2>
                    <Body>
                        VanCal uses optimistic updates, pre-fetching and caching to achieve a native app experience in the video bellow we demonstrate this by switching the week being viewed.  this is just one example, the whole application is built using these techniques and there would be no difference to a user between this application and a desktop application.
                    </Body>
                    <video controls width="800px">
                        <source src={NativeFeel} type="video/mp4"/>
                    </video>
                    <h2>Drag and drop rescheduling</h2>
                    <Body>
                        You can change the time of a job within a day, by dragging and dropping the tile, you can also change the length of the job by
                        changing the tile size by dragging the bottom edge.
                    </Body>
                    <video controls width="800px">
                        <source src={DragAndDrop} type="video/mp4"/>
                    </video>
                </Container>
            </div>
        </>


    )


}

export default IndexPage
