# EAuctionBank - Backend Design Document

## Project Overview
**EAuctionBank** is a professional bank auction/asset recovery platform for real estate properties in India. The platform facilitates bank-owned property auctions under the SARFAESI Act.

## Technology Stack
- **Backend Framework**: Spring Boot 3.x
- **Database**: MySQL 8.0
- **API Style**: RESTful
- **Authentication**: JWT/Spring Security
- **ORM**: Spring Data JPA / Hibernate

---

## Database Entities (Tables)

### 1. **User Entity**
Users who subscribe for property updates and register on the platform.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| full_name | VARCHAR(100) | User's full name |
| email | VARCHAR(255) | Unique, not null |
| phone | VARCHAR(20) | Optional phone number |
| interested_in | VARCHAR(50) | Property type interest |
| is_subscribed | BOOLEAN | Newsletter subscription status |
| created_at | TIMESTAMP | Registration date |
| updated_at | TIMESTAMP | Last update |

### 2. **Bank Entity**
Partner banks conducting auctions on the platform.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| name | VARCHAR(100) | Bank name (e.g., SBI, PNB) |
| code | VARCHAR(20) | Bank code |
| logo_url | VARCHAR(500) | Bank logo image URL |
| rbi_registration | VARCHAR(50) | RBI registration number |
| is_active | BOOLEAN | Active partnership status |
| created_at | TIMESTAMP | |

### 3. **Property Entity**
Properties available for auction.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| property_id | VARCHAR(50) | Unique property identifier |
| title | VARCHAR(255) | Property title |
| description | TEXT | Full property description |
| property_type | VARCHAR(50) | Residential, Commercial, Industrial, Plot |
| bank_id | BIGINT | Foreign Key to Bank |
| location | VARCHAR(255) | Full address |
| city | VARCHAR(100) | City name |
| state | VARCHAR(100) | State name |
| pincode | VARCHAR(10) | Postal code |
| latitude | DECIMAL(10,8) | GPS latitude |
| longitude | DECIMAL(11,8) | GPS longitude |
| bedrooms | INT | Number of bedrooms |
| bathrooms | INT | Number of bathrooms |
| area_sqft | DECIMAL(10,2) | Total area in sqft |
| market_price | DECIMAL(15,2) | Original market price |
| reserve_price | DECIMAL(15,2) | Auction reserve price |
| status | VARCHAR(20) | Available, Sold, Under Auction |
| possession_type | VARCHAR(50) | SARFAESI, DRT, etc. |
| verification_status | VARCHAR(20) | Verified, Pending |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 4. **PropertyImage Entity**
Images associated with properties.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| property_id | BIGINT | Foreign Key to Property |
| image_url | VARCHAR(500) | Image URL |
| image_type | VARCHAR(20) | Main, Gallery, Document |
| sort_order | INT | Display order |
| created_at | TIMESTAMP | |

### 5. **Auction Entity**
Auction events for properties.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| auction_id | VARCHAR(50) | Unique auction identifier |
| property_id | BIGINT | Foreign Key to Property |
| bank_id | BIGINT | Foreign Key to Bank |
| auction_status | VARCHAR(20) | Upcoming, Live, Closed |
| start_time | TIMESTAMP | Auction start time |
| end_time | TIMESTAMP | Auction end time |
| reserve_price | DECIMAL(15,2) | Reserve price for auction |
| emd_amount | DECIMAL(15,2) | Earnest Money Deposit |
| current_bid | DECIMAL(15,2) | Current highest bid |
| bid_increment | DECIMAL(15,2) | Minimum bid increment |
| total_bids | INT | Total number of bids |
| is_verified | BOOLEAN | Bank verification status |
| auction_notice_url | VARCHAR(500) | Official bank notice PDF |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### 6. **Bid Entity**
Bids placed by users on auctions.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| auction_id | BIGINT | Foreign Key to Auction |
| user_id | BIGINT | Foreign Key to User (optional) |
| bidder_name | VARCHAR(100) | Bidder name (guest) |
| bidder_email | VARCHAR(255) | Bidder email |
| bid_amount | DECIMAL(15,2) | Bid amount |
| bid_time | TIMESTAMP | When bid was placed |
| bid_status | VARCHAR(20) | Active, Won, Cancelled |
| is_highest | BOOLEAN | Whether this is highest bid |
| created_at | TIMESTAMP | |

### 7. **Testimonial Entity**
Client testimonials and reviews.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| client_name | VARCHAR(100) | Client's name |
| client_role | VARCHAR(100) | Role (Homebuyer, Investor, etc.) |
| client_image | VARCHAR(500) | Client photo URL |
| content | TEXT | Testimonial content |
| rating | INT | Star rating (1-5) |
| is_approved | BOOLEAN | Admin approval status |
| created_at | TIMESTAMP | |

### 8. **Subscription Entity**
Email subscriptions for property alerts.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| email | VARCHAR(255) | Subscriber email |
| subscription_type | VARCHAR(50) | Newsletter, Alerts, Both |
| preferred_locations | VARCHAR(500) | Location preferences |
| property_types | VARCHAR(500) | Property type preferences |
| is_active | BOOLEAN | Active subscription |
| subscribed_at | TIMESTAMP | |
| unsubscribed_at | TIMESTAMP | |

### 9. **QuickSearch Entity**
Popular search terms/quick filters.

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary Key |
| search_term | VARCHAR(100) | Search term |
| search_type | VARCHAR(50) | Bank, Location, Property Type |
| search_count | INT | Number of searches |
| is_featured | BOOLEAN | Show in quick search |
| sort_order | INT | Display priority |

---

## API Endpoints Design

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Password recovery

### Properties
- `GET /api/properties` - List all properties (with filters)
- `GET /api/properties/{id}` - Get property details
- `GET /api/properties/featured` - Get featured properties
- `GET /api/properties/latest` - Get latest properties
- `POST /api/properties` - Create property (Admin)
- `PUT /api/properties/{id}` - Update property (Admin)
- `DELETE /api/properties/{id}` - Delete property (Admin)

### Auctions
- `GET /api/auctions` - List all auctions
- `GET /api/auctions/live` - Get live auctions
- `GET /api/auctions/upcoming` - Get upcoming auctions
- `GET /api/auctions/{id}` - Get auction details
- `GET /api/auctions/{id}/bids` - Get auction bids
- `POST /api/auctions/{id}/bid` - Place a bid
- `POST /api/auctions` - Create auction (Admin)
- `PUT /api/auctions/{id}` - Update auction (Admin)

### Banks
- `GET /api/banks` - List partner banks
- `GET /api/banks/{id}` - Get bank details
- `GET /api/banks/{id}/properties` - Get bank's properties
- `POST /api/banks` - Add bank (Admin)
- `PUT /api/banks/{id}` - Update bank (Admin)

### Users & Subscriptions
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `POST /api/users/subscribe` - Subscribe to alerts
- `DELETE /api/users/unsubscribe` - Unsubscribe
- `GET /api/users/alerts` - Get user's alerts

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit testimonial
- `PUT /api/testimonials/{id}` - Update (Admin)
- `DELETE /api/testimonials/{id}` - Delete (Admin)

### Search
- `GET /api/search` - Search properties/auctions
- `GET /api/search/popular` - Get popular searches

---

## Service Layer Design

### 1. UserService
- User registration, login, profile management
- Subscription management

### 2. PropertyService
- CRUD operations for properties
- Property filtering and search

### 3. AuctionService
- Auction lifecycle management
- Bidding logic
- Real-time auction status updates

### 4. BankService
- Bank management
- Bank-property associations

### 5. BidService
- Bid placement and tracking
- Highest bid management
- Bid history

### 6. TestimonialService
- Testimonial management
- Approval workflow

### 7. SearchService
- Advanced search capabilities
- Popular search tracking

---

## Database Schema Highlights

### Relationships
- **Property** belongs to **Bank** (Many-to-One)
- **Auction** belongs to **Property** and **Bank** (Many-to-One)
- **Bid** belongs to **Auction** (Many-to-One)
- **PropertyImage** belongs to **Property** (Many-to-One)

### Indexes (for performance)
- `idx_property_city_state` on property(city, state)
- `idx_auction_status` on auction(auction_status)
- `idx_auction_dates` on auction(start_time, end_time)
- `idx_property_type` on property(property_type)
- `idx_property_price` on property(reserve_price)

---

## Recommended Project Structure

```
src/main/java/com/eautionbank/
├── config/
│   ├── SecurityConfig.java
│   ├── DatabaseConfig.java
│   └── SwaggerConfig.java
├── controller/
│   ├── AuthController.java
│   ├── PropertyController.java
│   ├── AuctionController.java
│   ├── BankController.java
│   ├── BidController.java
│   └── UserController.java
├── entity/
│   ├── User.java
│   ├── Bank.java
│   ├── Property.java
│   ├── PropertyImage.java
│   ├── Auction.java
│   ├── Bid.java
│   ├── Testimonial.java
│   └── Subscription.java
├── repository/
│   ├── UserRepository.java
│   ├── BankRepository.java
│   ├── PropertyRepository.java
│   ├── AuctionRepository.java
│   └── ...
├── service/
│   ├── UserService.java
│   ├── PropertyService.java
│   ├── AuctionService.java
│   └── ...
├── dto/
│   ├── PropertyDTO.java
│   ├── AuctionDTO.java
│   ├── BidDTO.java
│   └── ...
└── EAuctionBankApplication.java
```

---

## Next Steps for Implementation

1. Set up Spring Boot project with MySQL
2. Create entity classes with JPA annotations
3. Configure database connection
4. Create repositories
5. Implement services
6. Build REST controllers
7. Add Spring Security and JWT
8. Write unit tests
9. Configure Swagger for API documentation
10. Deploy and test

---

## Notes
- Use Soft Deletes for critical data
- Implement audit fields (created_at, updated_at, created_by)
- Use transactions for bidding operations
- Consider using WebSocket for real-time auction updates
- Implement caching for frequently accessed data
- Use pagination for list endpoints

