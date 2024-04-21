Form is a library that helps with froms in react.
Formik is used to
    1. Managing Data
    2. Form submission
    3. Form validation
Formik helps you to deal with forms in scalable and parformant and easy way.

---------------------------------------
Simple form validation (Youtube form)
---------------------------------------
We have 3 field with a submit button
    1. Name
    2. Email
    3. Channel name
In this we are dealing with mainly 3 things
    1. Managing the form state
    2. Handling form submission
    3. Validation and error messages

useFormik Hook: 
    which is a function which takes an object as a parameter, and which returns an object with different varieties of methods and properties.

    This formik hook is use to manage above 3 points.
        1. Managing the form state
        2. Handling form submission
        3. Validation and error messages

----------------------
Managing form state
----------------------

Step 1: We need to track the form fields, so when the value changes in field we need to track that, for this

    1. The first property we pass in useFormik was "initialValues"
    2. initialValues is an object which contains our form fields
    3. Very important: the properties should match with "name" attribute of the corresponding form fields.

Step 2:  We need to add the onchange and the value prop for each of the form field to ensure the form fields are in track with react and formik

    1. Add onChange and value props to each field.
    2. Now pass formik.handleChange on "onChange" method
    3. Same as pass formik.values.name in "value" attribute
    4. By doing that the formik will automatically starts the tracking of form field values

--------------------------
Handling form submission
--------------------------

Step 1: Specify the "onSubmit" prop in form tag, now pass the values as formik.handleSubmit
Step 2: Now pass the 2 nd attribute i.e onSubmit next to initialValues, now this onSubmit automattically receives the latest formik state data as a parameter. When ever user click on submit button then this onSubmit metho will becallled automatically.

-------------------------------
Validation and error messages
-------------------------------

Let we have to build like
    1. All are the required fields
    2. Add valid email format validation

Let add Validation rules for the form

    1. Let defaine validation function
    2. For connecting that validation function to formik we have to add 3rd property i.e "validate"
    3. "validate" which receives the form state as a parameter and which returns a object let that is errors object.
    4. Now the keys of that error object should be similar to that of name attribeutes of form fields.
    5. Now valus of that key should indicationg the string indicating that what is the error message should be for that particular field.


--------------------------
Dispalying error messages
--------------------------

As formik contains "values" object , it contains one more property i.e "errors"


----------------
Visited fields
----------------
1. Here we have "onBlur" prop, like formik.handleBlur for onBlur event
2. Now here "thouched" is an object which keeps track what are the visited field in an object with corresponding keys matching eith name attribute


---------------------------------------
Rewriting validation function with Yup
---------------------------------------

Yup can simplify the things.

-----------------------------------------------
Reducing boiler plate with formik super powers
-----------------------------------------------

We have 3 lines on each input field which is repeated, so remove that and replace one line with "getFieldProps" method
    1. onBlur
    2. OnChange
    3. value

--------------------
Formik components
--------------------
    1. Formik
    2. Form
    3. Field
    4. ErrorMessage

1. Formik component : which is the replacement for useFormik hook

Replacement steps
    1. Import Formik instead og useFormik
    2. Remove useFoemik code
    3. Wrap form tag with Formik component
    4. Pass the different props which we have passed in useFormik hook

2. Form Component : 
    
Replacement steps
    1. Import Form from formik
    2. Replace form tage with Form component
    3. Remove onSubmit event

3. Field Component :

Replacement steps
    1. Import Field from formik
    2. Replace input tag with Field component
    3. get rid of getFieldProps function

4. ErrorMessage Component :

Replacement steps

    1. Import ErrorMessage from formik
    2. Remove error message rendering code on JSX and replace with ErrorMessage component
    3. Pass name attribute with corresponding field name