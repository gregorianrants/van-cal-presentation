import * as React from "react"
import Login from '../assets/login.mp4'
import CreatingBooking from '../assets/creating-booking.mp4'
import GenerateFakeData from '../assets/generate-fake-data.mp4'
import Tiles from '../assets/tiles.jpg'
import NativeFeel from '../assets/native-feel.mp4'
import DragAndDrop from '../assets/drag_and_drop.mp4'
import GoogleCalendar from '../assets/google_calendar.mp4'
import AddBusinessDetails from '../assets/add-business-details.mp4'
import ManageInvoices from '../assets/manage-invoices.mp4'
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
                    <h2>Check out VanCal</h2>
                    <Body>
                        You can check out my app at the link at the bottom of this section but please read at least these points before visiting the app.
                    </Body>
                    <ul>
                        <li>VanCal is for demonstration purposes and is hosted of a free service the intial load will therefore be slow as the app is not constantly running and the server starts up when someone visits the site.</li>
                        <li>To see the speed it would load in production refresh the page after initial load.</li>
                        <li>I strongly recommend reading at least some of this web-page VanCal is a fairly niche app and it may not make sense otherwise</li>
                    </ul>
                    
                    <Body>You can visit the app at <a href="https://dry-earth-66864.herokuapp.com">https://dry-earth-66864.herokuapp.com</a></Body>

                    <h2>Introduction</h2>

                    <Body>Van Cal is a Web application I built to demonstrate my web development skills. It solves a
                        real world problem I encountered in running my own removals business. The solution provides an
                        integrated booking and invoicing application for removals companies. I have generalised the
                        application to be a Software As A Service - SAAS - application. Any removal company can create
                        their own account in the application or sign in with their google account and create and manage
                        their own data.
                    </Body>

                    <h3>The Pre-Existing Solution</h3>

                    <Body>Prior to VanCal I Used Google Calendar to manage my bookings , it has some great features
                        but also some drawbacks.</Body>

                    <h4>Google Calendar : Pros</h4>

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

                    <h4>Google Calendar : Cons</h4>

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


                    <h3>The Solution</h3>


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


                    <h2>A walk through VanCal</h2>

                    <h3>Home Page</h3>
                    <Body>
                        On first visiting VanCal, prior to logging in a user is presented with the home page, the
                        provides a brief description of what the application does and how it uses data. This page is
                        required by google for any application that uses google data such as VanCal which provides an
                        option to use data from Google Calendar.
                    </Body>

                    <h3>login</h3>

                    <Body>Users can create an email and password account and then sign in with it or they can sign in with their google account.  They can then create and manage data associated with the account they are signed in with.
                    </Body>

                    <Body>On logging in the user is redirected to the calendar page there isnt much to see hear yet as we havent created any data thus far.  Dont worry though we will get the the exciting stuff soon.</Body>

                    <video controls width="800px">
                        <source src={Login} type="video/mp4"/>
                    </video>

                    <h3>Creating A Booking</h3>
                    <Body>To create a booking click on the time slot on the calendar you want the booking to start at
                        and a form is launched to input the rest of the details.  Notice the immediate validation feedback given on the form.</Body>

                    <video controls width="800px">
                        <source src={CreatingBooking} type="video/mp4"/>
                    </video>

                    <Body>The event is added to the calendar immediately on saving this is known as an optimistic update and contributes to giving VanCal a native feel.</Body>

                    <h3>Adding Fake Data</h3>
                    <Body>You can add fake data to VanCal to see what the ui will look like in every day use with multiple booking in the calendar </Body>
                    <video controls width="800px">
                        <source src={GenerateFakeData} type="video/mp4"/>
                    </video>
                    <h3>Custom Tiling Algorithim</h3>
                    <Body>The layout of the tiles in van cal is not possible with any native css layout module.  VanCal uses a custom algorithim to calculate the layout of the tiles and then positions them using absolute positioning.  No 3rd party library was used for laying out the tiles.</Body>
                    <img src={Tiles} alt="" width='800px'/>
                    <h3>Native App Experience</h3>
                    <Body>
                        VanCal uses optimistic updates, pre-fetching and caching to achieve a native app experience in the video bellow we demonstrate this by switching the week being viewed.  this is just one example, the whole application is built using these techniques and there would be no difference to a user between this application and a desktop application.
                    </Body>
                    <video controls width="800px">
                        <source src={NativeFeel} type="video/mp4"/>
                    </video>
                    <h3>Drag and drop rescheduling</h3>
                    <Body>
                        You can change the time of a job within a day, by dragging and dropping the tile, you can also change the length of the job by
                        changing the tile size by dragging the bottom edge.
                    </Body>
                    <video controls width="800px">
                        <source src={DragAndDrop} type="video/mp4"/>
                    </video>

                    <h3>Authorizing google calendar</h3>
                    <Body>
                        It is possible to authorize van cal to view events from your google calendar, this is done from the settings page.  unlike google calendar van cal shows icons, on the tile, to represent invites to the event.  It uses an envelope for an invite and a tick for an accepted invite.  In my own business i use this to send invites from my google calendar to staff working on a given day. I can then see at a glance who has been invited to work and whether they have accepted.
                    </Body>


                    <video controls width="800px">
                        <source src={GoogleCalendar} type="video/mp4"/>
                    </video>

                    <h3>Manage Invoices</h3>
                    <Body>
                        Van Cal has a list view of all the bookings from this page we can manage invoicing for the bookings,  first it to add some information about the business using the app in settings, this info will be used for generating the invoices.
                    </Body>


                    <h4>Adding business info in settings</h4>
                    <video controls width="800px">
                        <source src={AddBusinessDetails} type="video/mp4"/>
                    </video>
                    <h4>creating, sending and viewing status of invoice</h4>
                    <Body>
                        The list view shows a list of all the bookings, from there we can access a page to manage the invoices for the job.
                        first we have to prepare the invoice this simply updates the data for the booking but with stricter validation to make sure all the necessary information is there to create an invoice.  then the invoice is created from the validated details, we can send the email to the customer and this will update the status of the invoice.  the email will show as being sent from the email address provided earlier in settings and any replies will go to that email. it also possible to void the invoice and create a new one.
                    </Body>
                    <Body>
                        The list view is ordered by date of booking and is paginated, it allows filtering bookings by invoice status to enable seeing what bookings need actions taken on them.
                    </Body>
                    <video controls width="800px">
                        <source src={ManageInvoices} type="video/mp4"/>
                    </video>
                </Container>
            </div>
        </>


    )


}

export default IndexPage
