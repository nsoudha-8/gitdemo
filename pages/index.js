import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

function CollapsibleExample() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  className="fixed-top">
        <Container>
        <Navbar.Brand href="#home">Vercel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto " style={{paddingLeft:"200px"}}>
                <NavDropdown title="Features" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Preview</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Edge Function</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Next.js Live</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Front End Infrastructures</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Analytics</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">CLI and API</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#templates">Templates</Nav.Link>
                <Nav.Link href="#integrations">Integrations</Nav.Link>
                <Nav.Link href="#customers">Customers</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Contact</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
                <Button variant="dark">Sign Up</Button>
            </Nav>
        
        </Navbar.Collapse>
        </Container>
    </Navbar>

    <Container fluid>
        <Container fluid className="pb-5" style={{backgroundColor:'linen'}}>
            <p style={{fontWeight:'700',fontSize:'80px',textAlign:'center' ,paddingTop:"200px"}} >Your Infrastructures,<br/>Simplified.</p>
            <h5 style={{textAlign:'center'}}>Bring your framework of choice and deploy with zero configuration to Vercel’s <br/>Edge, an intelligently automated, global infrastructure.</h5>
            <div className="pt-5 justifyContentCenter">
                <Row>
                    <Col></Col>
                    <Col>
                    <Button variant="dark"size="lg">Deploy Now</Button>
                    <Button variant="light"className="ms-3"size="lg">Talk to an Expert</Button>{' '}
                    </Col>
                    <Col></Col>
                </Row>
            </div>

        </Container>
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" classname="bi bi-globe2"  viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg>
                <h3>Edge, optimized</h3>
                <p>Our Edge Network is able to intelligently route traffic and run logic as close to your users as possible</p>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                </svg>
                <h3>Dynamically scalable</h3>
                <p>Our static and serverless infrastructure is designed to scale to infinity and back down to zero.</p>
                </Col>
                <Col><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-shield-fill" viewBox="0 0 16 16">
                <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                </svg>
                <h3>Secure by default</h3>
                <p>Requests are handled in isolation, and content is replicated globally, ensuring stability by design.</p></Col>
            </Row>
            
        </Container >
    </Container >
    <Container fluid  style={{backgroundColor:'Gainsboro'}}>
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                <h3 style={{fontweight:"700"}}>Just code</h3>
                <p>Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding.</p>
                <Button className="btn-dark" size="lg">Get Started</Button>
                </Col>
                <Col>
                <Image src="/images/just-code-light-2.png" className="fluid" alt="image"></Image>
                
                </Col>
            </Row>
        </Container>
    </Container>
    <Container fluid>
        <Container className="pt-5 pb-5" style={{textAlign:'center'}} >
            <h3 style={{fontWeight:"600",fontSize: "2.5rem"}}>Zero configuration. Seamless deployments. </h3>
            <p className="pt-2"style={{fontWeight:"400"}}>Vercel provides everything you need to host your frontend.</p>
            
        </Container>


        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Infinite scalability</Card.Title>
                        <Card.Text className="pt-3">Every layer of our infrastructure scales up and down dynamically from our ingress layer to our storage and caching systems and functions.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Intelligent edge caching</Card.Title>
                        <Card.Text className="pt-3">
                        Our Edge preserves copies of critical metadata to avoid and tolerate outages and maximize autonomy. Framework integrations ensure optimal caching and purging
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Observability as priority</Card.Title>
                        <Card.Text className="pt-3">
                        Realtime logs of every touchpoint, one-click integrations with leading platforms, and built-in performance analytics mean you never have to forego introspection.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="pt-3 pb-3">
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Atomic deploys</Card.Title>
                        <Card.Text className="pt-3 pb-4">
                        Every Vercel deploy is immutable, and domains act as pointers. Reverting and deploying is an atomic swap operation.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Immutable asset preservation</Card.Title>
                        <Card.Text className="pt-3">
                        Our Edge intelligently preserves multiple concurrent versions of an app, including all their JS, CSS, and other assets, to not interrupt existing traffic as you ship.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Always fast and online</Card.Title>
                        <Card.Text className="pt-3">
                        Deploying and reverting ensures the successful provisioning and acquisition of resources and metadata, to ensure user traffic never slows down or sees errors.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Automatic failover</Card.Title>
                        <Card.Text className="pt-3 pb-4">
                        Our Anycast Edge Network automatically detects unhealthy regions and re-routes traffic to stable regions. </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Multi-AZ code execution</Card.Title>
                        <Card.Text className="pt-3">
                        Serverless functions get automatically distributed across all availability zones of a datacenter. If one becomes unavailable, no traffic is dropped.</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Image Optimization</Card.Title>
                        <Card.Text className="pt-3">
                        Optimize images at the Edge and improve your website's loading speed, user experience, and Core Web Vitals. <span style={{color:"blue"}}>Learn more about Image Optimization →</span></Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid className="pt-5 pb-5" style={{textAlign:'center' , backgroundColor:'peachpuff'}} >
            <p style={{fontWeight:"700"}}>INCREMENTAL STATIC REGENERATION</p>
            <h3 style={{fontWeight:"700",    fontSize: "2.5rem"}}>
            Break free from your build times
            </h3>
            <p  className="pt-3 pb-3" style={{fontSize:"1.25rem"}}>Incremental Static Regeneration (ISR) puts you in control of your static builds by <br/> leveraging the power of server-side code to generate pages at runtime.</p>
            <Button className="btn-dark" size="lg">Learn About ISR</Button>
        </Container>
        

        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                <Image src="/images/isr-graphic-light-2.png" alt="image" className="fluid"></Image>
                </Col>
                <Col>
                <Row><p style={{fontSize: "1.25rem",fontWeight:"600" ,paddingTop:"150px" }}>Faster build times</p><p>Generate pages on-demand instead of waiting for <br/> the entire site at build time.</p></Row>
                <Row className="pt-3"><p style={{fontSize: "1.25rem",fontWeight:"600"}}>Granular cache control</p><p>ISR puts developers in control of their content.<br/> Decide how much to build and when to revalidate.</p></Row>
                <Row className="pt-3"><p style={{fontSize: "1.25rem",fontWeight:"600"}}>Instant rollbacks</p><p>Pages are persisted between deployments so you <br/> never lose a version.</p></Row>

                </Col>
            </Row>
        </Container>
        <hr/>
        <Container fluid className="pt-5 pb-5" style={{backgroundColor:'thistle'}}>
            <Row>
                <Col>
                <p style={{fontWeight:"800",fontSize: "3.5rem"}}>Develop. Preview. Ship.<span style={{marginLeft:"300px"}}><Button variant="primary" size="lg" >  Deploy Now</Button></span></p>
                <p style={{fontSize: "1.25rem"}}>The development platform for the best frontend teams.<span style={{marginLeft:"455px"}}><Button variant="dark"size="lg" >Talk to Expert</Button></span></p>
                </Col>
            </Row>
        </Container>   
        
        <Container fluid className="pt-5" style={{backgroundColor:'azure'}}>
            <Row>
                <Col>
                <a href="#">
                <Image alt="vercel logo" ></Image>
                </a>
                </Col>
                <Col>
                <h3 style={{fontSize:"0.875rem"}}>FrameWorks</h3>
                <ul className="list-unstyled">
                    <li>Next.js</li>
                    <li>Create react App</li>
                    <li>Svelte</li>
                    <li>Nuxt</li>
                    <li>Gatsby</li>
                    <li>Vue</li>
                    <li>Angular</li>
                    <li>More Frameworks</li>
                </ul>
                </Col>

                <Col>
                <h3 style={{fontSize:"0.875rem"}}>Resources</h3>
                <ul className="list-unstyled">
                    <li>Documentation</li>
                    <li>Experts</li>
                    <li>Customers</li>
                    <li>guides</li>
                    <li>Support</li>
                    <li>api reference</li>
                    <li>oss</li>
                    <li>command line</li>
                </ul>
                </Col>
                <Col>
                <h3 style={{fontSize:"0.875rem"}}>Company</h3>
                <ul className="list-unstyled">
                <li>Documentation</li>
                    <li>Experts</li>
                    <li>Customers</li>
                    <li>guides</li>
                    <li>Support</li>
                    <li>api reference</li>
                    <li>oss</li>
                    <li>command line</li>
                </ul>
                </Col>
                <Col>
                <h3 style={{fontSize:"0.875rem"}}>Legal</h3>
                <ul className="list-unstyled">
                <li>Documentation</li>
                    <li>Experts</li>
                    <li>Customers</li>
                    <li>guides</li>
                    <li>Support</li>
                    <li>api reference</li>
                    <li>oss</li>
                    <li>command line</li>
                </ul>
                </Col>
            </Row>
        </Container>
       
       
    </Container>
    </>

    
  );
}

export default CollapsibleExample;