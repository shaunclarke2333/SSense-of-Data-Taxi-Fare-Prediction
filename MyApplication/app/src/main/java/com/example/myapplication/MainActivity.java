package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    EditText editText;
    TextView textView;
    EditText editPassenger;
    EditText editLocation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = findViewById(R.id.edit_text);
        textView = findViewById(R.id.text_view);
        editLocation = findViewById(R.id.edit_location);
        editPassenger = findViewById(R.id.edit_location);

    }

    public void displayResults(View view){
        String inputText = editText.getText().toString();
        if (inputText.equals("")){
            return;
        }

        

        textView.setText(inputText);

    }
}
