import React, { Fragment, PropTypes } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  View, 
  TextInput,
  Platform,
} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Title, Right, Button, Picker, Form } from "native-base";
import { Icon } from 'react-native-elements'
import * as navigation from '../../utils/navigation'
import ImagePicker from 'react-native-image-picker'
import { Formik } from 'formik'
import * as yup from 'yup'
import ModalSelector from 'react-native-modal-selector'
import { recipeCategory } from '../../utils/global-constant'


const recipeLevel = ['Easy', 'Medium', 'Difficult'];


export default class InputRecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            ingredients: [],
            steps: [],
            level: recipeLevel[0],
            category: recipeCategory[0],
          }
        this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleAddStep = this.handleAddStep.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    handleAddIngredient(stringIngre) {
        newIngre = [stringIngre]
        this.setState((state) => ({ingredients: state.ingredients.concat(newIngre)}))
    }

    handleAddStep(step) {
        newStep = [step]
        this.setState((state) => ({steps: state.steps.concat(newStep)}))
    }

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }

    updateLevel(level) {
        this.setState({ level: level })
    }

    updateCategory(category) {
        this.setState({ category: category })
    }

    render() {
        const { photo, ingredients, steps, level, category} = this.state
        const data = recipeLevel.map((item, index) => ({key: index, label: item}))
        const categoryData = recipeCategory.map((item, index) => ({key: index, label: item}))
        return (
                <Container style={{backgroundColor: '#F4F4F4'}}>
                    <Header style={{ borderBottomWidth: 0, marginTop: 10, backgroundColor: '#F4F4F4'}}>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" color='#000' size={32} type="material" />   
                            </Button>
                        </Left>
                        <Body>
                        <Title style={styles.title}>ADD RECIPE</Title>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.up}>UPLOAD</Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <ScrollView contentContainerStyle={styles.body}
                                showsVerticalScrollIndicator={false}>
                        <View style={styles.intro}>
                            <View style={styles.rowName}>
                                <Text style={styles.txtIntro}>Recipe of: </Text>
                                <TextInput style={styles.inputIntro} placeholder='Ex: Stawberry cupcake'/>
                            </View>
                            <View style={styles.rowName}>
                                <Text style={styles.txtIntro}>Time: </Text>
                                <TextInput style={styles.inputIntro} placeholder='Ex: 15 mins'/>
                            </View>
                            <View style={styles.rowName}>
                                <Text style={styles.txtIntro}>Portion: </Text>
                                <TextInput style={styles.inputIntro} placeholder='Ex: 4' keyboardType='numeric'/>
                            </View>
                            <View style={styles.rowName}>
                                <Text style={styles.txtIntro}>Level: </Text>
                                <ModalSelector
                                    data={data}
                                    initValue="Select something yummy!"
                                />
                            </View>
                            <View style={styles.rowName}>
                                <Text style={styles.txtIntro}>Category: </Text>
                                <ModalSelector
                                    data={categoryData}
                                    initValue="Select something yummy!"
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.frame} onPress={() => this.handleChoosePhoto()}>
                            <Text style={styles.text}>Upload Image</Text>
                            {photo && (
                                <Image 
                                    source={{ uri: photo.uri }}
                                    style={styles.img}/>
                                )
                            }
                        </TouchableOpacity>
                        <View style={styles.ingredient}>
                            <Text style={styles.step}>INGREDIENTS</Text>
                            {
                                ingredients.map((ingredient, index) => (
                                    <View style={styles.rowflex1} key={index}>
                                        <View style={styles.smallBtn}/>
                                        <Text style={styles.txt}>{ingredient}</Text>
                                    </View>
                                ))
                            }
                            <View style={styles.inputIngre}>
                                <Formik initialValues={{ ingredient: '', amount: '', unit: '' }}
                                    validationSchema={
                                        yup.object().shape({
                                            ingredient: yup
                                            .string()
                                            .required("Ingredient is required"),
                                            unit: yup
                                            .string()
                                            .required("Unit is required"),
                                            amount: yup
                                            .string()
                                            .required("Amount is required"),
                                        
                                       })}
                                    onSubmit={(values) => {
                                        var strIngre = values.amount + " " + values.unit + " " + values.ingredient;
                                        this.handleAddIngredient(strIngre);
                                        values.ingredient = "";
                                        values.unit = "";
                                        values.amount = "";
                                    }}
                                >
                                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => 
                                        (
                                            <Fragment>
                                                <View style={styles.rowIngredient}>
                                                    <View style={styles.rowIngre}>
                                                        <TextInput style={styles.row} 
                                                                    placeholder='Ingredient'
                                                                    value={values.ingredient}
                                                                    onBlur={() => setFieldTouched('ingredient')}
                                                                    onChangeText={handleChange('ingredient')}></TextInput>
                                                        {touched.ingredient && errors.ingredient &&
                                                            <Text style={{ fontSize: 12, color: 'red', width: '100%', padding: 2 }}>{errors.ingredient}</Text>
                                                        }
                                                    </View>
                                                    <View style={styles.rowAmount}>
                                                        <TextInput style={styles.row} 
                                                                    placeholder='Amount'
                                                                    value={values.amount}
                                                                    keyboardType='numeric'
                                                                    onBlur={() => setFieldTouched('amount')}
                                                                    onChangeText={handleChange('amount')}/>
                                                        {touched.amount && errors.amount &&
                                                            <Text style={{ fontSize: 12, color: 'red', width: '100%', padding: 2 }}>{errors.amount}</Text>
                                                        }
                                                    </View>
                                                    <View style={styles.rowUnit}>
                                                        <TextInput style={styles.row} 
                                                                    placeholder='Unit'
                                                                    value={values.unit}
                                                                    onBlur={() => setFieldTouched('unit')}
                                                                    onChangeText={handleChange('unit')}/>
                                                        {touched.unit && errors.unit &&
                                                            <Text style={{ fontSize: 12, color: 'red', width: '100%', padding: 2 }}>{errors.unit}</Text>
                                                        }
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={styles.addCart} onPress={handleSubmit}>
                                                    <Text style={styles.addTxt}>ADD INGREDIENT</Text>
                                                </TouchableOpacity>
                                            </Fragment>
                                        )
                                    }
                                </Formik>
                            </View>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.step}>INSTRUCTIONS</Text>
                            {
                                steps.map((step, index) => (
                                    <View style={styles.rowflex2} key={index}>
                                        <View style={styles.largeBtn}>
                                            <Text style={styles.index}>{index}</Text>
                                        </View>
                                        <Text style={styles.txt}>{step}</Text>
                                    </View>
                                ))
                            }
                            <View style={styles.inputStep}>
                                <Formik initialValues={{ step: "" }}
                                    validationSchema={
                                        yup.object().shape({
                                            step: yup
                                            .string()
                                            .required("Step is required"),
                                        
                                       })}
                                    onSubmit={(values) => {
                                        this.handleAddStep(values.step);
                                        values.step = "";
                                    }}
                                >
                                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) =>
                                        (
                                            <Fragment>
                                                <TextInput style={styles.inputStp} 
                                                            placeholder='Step'
                                                            value={values.step}
                                                            onBlur={() => setFieldTouched('step')}
                                                            onChangeText={handleChange('step')}/>
                                                {touched.step && errors.step &&
                                                    <Text style={{ fontSize: 12, color: 'red', width: '100%', padding: 2 }}>{errors.step}</Text>
                                                }
                                                <TouchableOpacity style={styles.addCart} onPress={handleSubmit}>
                                                    <Text style={styles.addTxt}>ADD INSTRUCTION</Text>
                                                </TouchableOpacity>
                                            </Fragment>
                                        )
                                    }
                                </Formik>
                            </View>
                        </View>
                    </ScrollView>
                </Container>
        )
    }
}
