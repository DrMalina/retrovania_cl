/*  */
// A file for helper functions
/*  */

//e.g. 'confirmPassword' => 'Confirm Password'
export const capitalizeFirstLetter = string => {
  return string
    .replace(/([A-Z])/g, ' $1') // insert a space before all caps
    .replace(/^./, str => str.toUpperCase()); // capitalize first letter
};
