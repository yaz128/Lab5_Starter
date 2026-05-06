// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("valid phone number", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone with area code", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("invalid phone number", () => {
  expect(isPhoneNumber("12345")).toBe(false);
});

test("valid email", () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test("invalid email missing @", () => {
  expect(isEmail("testexample.com")).toBe(false);
});

test("invalid email missing domain", () => {
  expect(isEmail("test@.com")).toBe(false);
});

test("valid strong password", () => {
  expect(isStrongPassword("Abcd123")).toBe(true);
});

test("invalid password too short", () => {
  expect(isStrongPassword("Ab1")).toBe(false);
});

test("invalid password starts with number", () => {
  expect(isStrongPassword("1abcd")).toBe(false);
});

test("valid date", () => {
  expect(isDate("12/25/2023")).toBe(true);
});

test("valid short date", () => {
  expect(isDate("1/1/2023")).toBe(true);
});

test("invalid date format", () => {
  expect(isDate("2023-12-25")).toBe(false);
});

test("valid hex color 6 digits", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("valid hex color 3 digits", () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test("invalid hex color", () => {
  expect(isHexColor("ZZZ")).toBe(false);
});
