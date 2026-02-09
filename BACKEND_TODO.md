# EAuctionBank Backend Implementation TODO

## Project Setup
- [ ] Initialize Spring Boot project with Maven/Gradle
- [ ] Configure MySQL database connection in application.yml
- [ ] Set up JPA/Hibernate configuration
- [ ] Configure Spring Security with JWT
- [ ] Set up Swagger/OpenAPI documentation
- [ ] Configure application properties (port, database, etc.)

## Entity Creation
- [ ] Create User entity with JPA annotations
- [ ] Create Bank entity
- [ ] Create Property entity with all fields
- [ ] Create PropertyImage entity
- [ ] Create Auction entity
- [ ] Create Bid entity
- [ ] Create Testimonial entity
- [ ] Create Subscription entity
- [ ] Create QuickSearch entity
- [ ] Add relationships between entities
- [ ] Add audit fields (created_at, updated_at)

## Repository Layer
- [ ] Create UserRepository
- [ ] Create BankRepository
- [ ] Create PropertyRepository with custom queries
- [ ] Create AuctionRepository with custom queries
- [ ] Create BidRepository
- [ ] Create TestimonialRepository
- [ ] Create SubscriptionRepository
- [ ] Create QuickSearchRepository

## DTOs (Data Transfer Objects)
- [ ] Create UserDTO
- [ ] Create PropertyDTO
- [ ] Create PropertyRequestDTO
- [ ] Create AuctionDTO
- [ ] Create AuctionRequestDTO
- [ ] Create BidDTO
- [ ] Create BidRequestDTO
- [ ] Create BankDTO
- [ ] Create TestimonialDTO
- [ ] Create ApiResponse wrapper

## Service Layer
- [ ] Implement UserService
  - [ ] User registration
  - [ ] User login/authentication
  - [ ] Profile management
- [ ] Implement PropertyService
  - [ ] CRUD operations
  - [ ] Filtering and search
  - [ ] Pagination
- [ ] Implement AuctionService
  - [ ] Auction CRUD
  - [ ] Bidding logic
  - [ ] Real-time status updates
- [ ] Implement BidService
  - [ ] Place bid
  - [ ] Track highest bid
  - [ ] Bid history
- [ ] Implement BankService
  - [ ] Bank management
- [ ] Implement TestimonialService
- [ ] Implement SearchService

## Controller Layer
- [ ] Create AuthController
  - [ ] POST /api/auth/register
  - [ ] POST /api/auth/login
  - [ ] POST /api/auth/logout
- [ ] Create PropertyController
  - [ ] GET /api/properties (with filters)
  - [ ] GET /api/properties/{id}
  - [ ] GET /api/properties/featured
  - [ ] POST/PUT/DELETE (Admin)
- [ ] Create AuctionController
  - [ ] GET /api/auctions
  - [ ] GET /api/auctions/live
  - [ ] GET /api/auctions/upcoming
  - [ ] POST /api/auctions/{id}/bid
- [ ] Create BankController
- [ ] Create UserController
- [ ] Create TestimonialController
- [ ] Create SearchController

## Security Configuration
- [ ] Configure JWT token generation
- [ ] Configure JWT token validation
- [ ] Create JWT filter
- [ ] Set up role-based access (USER, ADMIN)
- [ ] Configure public and protected endpoints
- [ ] Implement password encryption (BCrypt)

## Validation
- [ ] Add validation annotations to DTOs
- [ ] Create validation error response
- [ ] Add custom validators if needed

## Error Handling
- [ ] Create global exception handler
- [ ] Handle validation errors
- [ ] Handle resource not found
- [ ] Handle authentication errors
- [ ] Create custom exception classes

## API Documentation
- [ ] Configure Swagger/OpenAPI
- [ ] Add endpoint documentation
- [ ] Add request/response examples
- [ ] Create API versioning strategy

## Testing
- [ ] Write unit tests for services
- [ ] Write unit tests for controllers
- [ ] Create integration tests
- [ ] Test database operations
- [ ] Test security configuration
- [ ] Achieve minimum 80% coverage

## Performance Optimization
- [ ] Add database indexes
- [ ] Implement caching (Redis/Memcached)
- [ ] Optimize queries (N+1 problem)
- [ ] Implement pagination
- [ ] Configure connection pooling

## Deployment Preparation
- [ ] Create Dockerfile
- [ ] Configure application for production
- [ ] Set up environment variables
- [ ] Create database migration scripts (Flyway/Liquibase)
- [ ] Set up CI/CD pipeline

## API Endpoints Summary

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
```

### Properties
```
GET /api/properties?city=&type=&minPrice=&maxPrice=
GET /api/properties/{id}
GET /api/properties/featured
GET /api/properties/latest
POST /api/properties (Admin)
PUT /api/properties/{id} (Admin)
DELETE /api/properties/{id} (Admin)
```

### Auctions
```
GET /api/auctions
GET /api/auctions/live
GET /api/auctions/upcoming
GET /api/auctions/closed
GET /api/auctions/{id}
POST /api/auctions/{id}/bid
POST /api/auctions (Admin)
PUT /api/auctions/{id} (Admin)
```

### Banks
```
GET /api/banks
GET /api/banks/{id}
GET /api/banks/{id}/properties
POST /api/banks (Admin)
PUT /api/banks/{id} (Admin)
```

### Users & Subscriptions
```
GET /api/users/profile
PUT /api/users/profile
POST /api/users/subscribe
DELETE /api/users/unsubscribe
GET /api/users/alerts
```

### Testimonials
```
GET /api/testimonials
POST /api/testimonials
PUT /api/testimonials/{id} (Admin)
DELETE /api/testimonials/{id} (Admin)
```

### Search
```
GET /api/search?q=
GET /api/search/popular
```

## Database Schema Quick Reference

```
Users (id, full_name, email, phone, interested_in, is_subscribed, created_at, updated_at)
Banks (id, name, code, logo_url, rbi_registration, is_active, created_at)
Properties (id, property_id, title, description, property_type, bank_id, location, city, state, pincode, bedrooms, bathrooms, area_sqft, market_price, reserve_price, status, possession_type, verification_status)
PropertyImages (id, property_id, image_url, image_type, sort_order)
Auctions (id, auction_id, property_id, bank_id, auction_status, start_time, end_time, reserve_price, emd_amount, current_bid, bid_increment, total_bids, is_verified, auction_notice_url)
Bids (id, auction_id, user_id, bidder_name, bidder_email, bid_amount, bid_time, bid_status, is_highest)
Testimonials (id, client_name, client_role, client_image, content, rating, is_approved)
Subscriptions (id, email, subscription_type, preferred_locations, property_types, is_active, subscribed_at)
QuickSearches (id, search_term, search_type, search_count, is_featured, sort_order)
```

## Technology Stack Confirmation
- **Backend**: Spring Boot 3.x
- **Database**: MySQL 8.0
- **ORM**: Spring Data JPA / Hibernate
- **Security**: Spring Security + JWT
- **API Documentation**: Swagger/OpenAPI
- **Build Tool**: Maven or Gradle

