
-- Step 1: Create Database
CREATE DATABASE store_rating_db;
USE store_rating_db;

-- Step 2: Create Users Table
-- This table stores:
-- Admin
-- Normal User
-- Store Owner


CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(60) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    address VARCHAR(400),

    role ENUM(
        'ADMIN',
        'NORMAL_USER',
        'STORE_OWNER'
    ) NOT NULL,

    status ENUM(
        'ACTIVE',
        'INACTIVE'
    ) DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
);


-- Step 3: Create Stores Table
-- Each store belongs to a Store Owner.

CREATE TABLE stores (
    store_id INT AUTO_INCREMENT PRIMARY KEY,

    owner_id INT NOT NULL,

    name VARCHAR(150) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    address VARCHAR(400),

    status ENUM(
        'ACTIVE',
        'INACTIVE'
    ) DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_store_owner
    FOREIGN KEY (owner_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- Step 4: Create Ratings Table
CREATE TABLE ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    store_id INT NOT NULL,

    rating TINYINT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_rating_user
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE,

    CONSTRAINT fk_rating_store
    FOREIGN KEY (store_id)
    REFERENCES stores(store_id)
    ON DELETE CASCADE,

    CONSTRAINT chk_rating
    CHECK (rating BETWEEN 1 AND 5),

    CONSTRAINT unique_user_store
    UNIQUE(user_id, store_id)
);


-- Step 5: Create Useful Indexes
-- These improve search performance.
CREATE INDEX idx_user_name
ON users(name);

CREATE INDEX idx_user_email
ON users(email);

CREATE INDEX idx_store_name
ON stores(name);

CREATE INDEX idx_store_address
ON stores(address);

CREATE INDEX idx_user_role
ON users(role);

CREATE INDEX idx_store_search
ON stores(name, address);


-- Insert Initial Admin

INSERT INTO users
(
    name,
    email,
    password,
    address,
    role
)
VALUES
(
    'System Administrator',
    'admin@gmail.com',
    'admin123',
    'Head Office',
    'ADMIN'
);