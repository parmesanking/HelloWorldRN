package com.example.helloworldrn

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.example.helloworldrn.databinding.ActivityMainBinding
import com.example.helloworldrn.ui.RNModuleActivity


class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)



        val btnGoRNScreen = findViewById<Button>(R.id.btnGoRNScreen)
        val edt = findViewById<EditText>(R.id.editText)
        btnGoRNScreen.setOnClickListener {
            val intent = Intent(this@MainActivity, RNModuleActivity::class.java)
            Log.d("GO", edt.getText().toString())
            intent.putExtra("message_from_native", edt.getText().toString())
            startActivity(intent)
        }

    }
}